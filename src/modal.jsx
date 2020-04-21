import React, { Suspense, lazy, useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import Spinner from "react-spinner";
import './react-spinner.css';

import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import { urlParts, getPullRequestURL, loginOK, logOut } from './utils.js';
// import checkpull from './checkpull';
// import { startLogin, finishLogin, loginOK, logOut } from './login.js';
import parseid from './parseid';

const FieldList = React.lazy(() => import('./fieldlist.jsx'));
const Editor = React.lazy(() => import('./editor.jsx'));
const SaveButton = React.lazy(() => import('./save.jsx'));

import "./modal.css";

var urlStub = urlParts().base;

export const App = () => {
    // States
    const [popup, setPopup] = useState({
        on: false,
        edit: false
    });
    const [bibdata, setBibdata] = useState({});
    const [editCite, setEditCite] = useState(false);
    const [loginState, setLoginState] = useState(false);
    const [citationInfo, setCitationInfo] = useState({});
    const [callInProgress, setCallInProgress] = useState(false);
    
    const storeCitationInfo = useCallback((obj) => setCitationInfo(citationInfo => citationInfo = obj));

    const storeCallInProgress = useCallback((val) => setCallInProgress(callInProgress => callInProgress = val));
    
    const openModal = useCallback(async () => {
        // XXX For an overlay spinner, set a "popupCalled" state variable
        // XXX here, to show spinner until "popup.on" is true.
        storeCallInProgress(true);
        var html_id = window.localStorage.getItem("html_id");
        var elem = document.getElementById(html_id);
        var cite_id = elem.getAttribute("data-info");
        var info = parseid(html_id, cite_id);
        storeCitationInfo(info);
        if (loginOK()) {
           if (!getPullRequestURL()) {
               // Set URL and proposed cite form of pull request in localStorage
               await getCheckpull(info);
           }
        }
        openModalFinal();
        storeCallInProgress(false);
    });

    // Callback setters
    const openModalFinal = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: false
        };
    }), []);

    const closeModal = useCallback(() => setPopup(popup => {
        window.localStorage.removeItem('html_id');
        window.localStorage.removeItem('citation');
        window.localStorage.removeItem('cite_desc');
        window.localStorage.removeItem('cite_url');
        window.localStorage.removeItem('cites_metadata');
        window.localStorage.removeItem('cites_info');
        return {
            on: false,
            edit: false
        };
    }), []);
    
    const getEditCiteOn = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: true
        };
    }), []);
    
    const getLogin = (funcName, arg) => {
        return import(/* webpackChunkName: "login" */ './login.js').then(({ default: login }) => {
            return login[funcName](arg);
        }).catch(error => 'An error occurred while loading the Login component');
    };

    const getCheckpull = (citationInfo) => {
        return import(/* webpackChunkName: "checkPull" */ './checkpull.js').then(({ default: checkPull }) => {
            return checkPull(citationInfo);
        }).catch(error => 'An error occurred while loading the Login component');
    };
    
    const openInNamedTab = (url) => {
        var a = document.createElement('a');
        a.target="_github_pull_request";
        a.href=url;
        a.click();
    }
    
    // Events
    useEffect(() => {
        console.log('Set listeners =160=');
        const nodes = document.getElementsByClassName("cite");
        for (var node of nodes) {
            // Pulling details from the event here makes it simpler to
            // repurpose the open event for login-revisits to the page.
            node.addEventListener("click", (ev) => {
                var html_id = ev.currentTarget.getAttribute("id");
                var elem = document.getElementById(html_id);
                var cite_id = elem.getAttribute("data-info");
                var info = parseid(html_id, cite_id);
                if (info) {
                    window.localStorage.setItem('html_id', html_id);
                    window.localStorage.setItem('citation', ev.currentTarget.innerHTML);
                    storeCitationInfo(info);
                    openModal();
                }
            });
        }
        window.addEventListener("beforeunload", function(event) {
            window.localStorage.removeItem('access_token');
        });
      }, []);

    useEffect(() => {
        // Setting ID and text in localStore allows us to scroll to the
        // current location and reopen the popup after the redirect completes.
        getLogin("finishLogin", openModal);
    });

    // The popup
    return (
    <div>
    {
    callInProgress ?
    (<div id="spinner-overlay"><Spinner/></div>)
    :
    (<Popup 
        open={popup.on}
        modal
        defaultOpen={false}
        closeOnDocumentClick
        closeOnEscape
        onClose={closeModal}
    >
    {close => {
    return (
        <div className="modal">
        <a className="close" onClick={closeModal}>
          &times;
        </a>
        <div className="header">
        {
           popup.edit ?
             (<Suspense fallback={<div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(window.localStorage.getItem("citation"))}}></div>}>
                 <Editor citeContent={window.localStorage.getItem("citation")} />
             </Suspense>)
             :
             (<div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(window.localStorage.getItem("citation"))}}></div>)
        }
        </div>
        <div className="content">
          {" "}
          <Suspense fallback={<div>Loading, please wait.</div>}>
              <FieldList citationInfo={citationInfo} urlStub={urlStub} />
          </Suspense>
        </div>
        {
            loginOK() ?
                popup.edit ?
                (<div>
                  <textarea placeholder="Tell us about the proposed change to this cite form" id="modal-comment" defaultValue={window.localStorage.getItem("cite_desc")}></textarea>
                  <table className="actions balanced">
                    <tbody>
                    <tr>
                      <td><button onClick={() => {openModal()}}>Cancel</button></td>
                      <td>
                          <Suspense fallback={<button id="save-button">Save</button>}>
                              <SaveButton modal={openModal} citationInfo={citationInfo}/>
                          </Suspense>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>)
                :
                (<table className="actions balanced" id="login-base-buttons">
                  <tbody>
                  <tr>
                    <td><button onClick={() => {logOut(); openModalFinal();}}>Logout</button></td>
                      {
                        getPullRequestURL() ?
                          (<td><button onClick={() => {openInNamedTab(getPullRequestURL())}} className="review-button">Review</button></td>) :
                          (<td hidden={true}><button>Review</button></td>)
                      }
                    <td><button onClick={getEditCiteOn}>Edit</button></td>
                  </tr>
                  </tbody>
                </table>)
            :
            <table className="actions wideleft">
              <tbody>
              <tr>
                <td className="login-note">
                    <p>
                        The Jurism record for the citation are shown above. 
                    </p>
                    <p>
                        Log in to GitHub to propose a change.
                    </p>
                </td>
                <td><button onClick={() => { getLogin("startLogin"); return true; }}>Login</button></td>
              </tr>
              </tbody>
            </table>
        }
      </div>
    )}}
    </Popup>)
}</div>)}

ReactDOM.render(<App />, document.querySelector("#popup-root"));
