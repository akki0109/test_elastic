(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1290:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(54),c=t.n(o),r=(t(389),t(243)),s=(t(390),t(391),t(4));const i={display:"form",components:[{label:"Text Field",tableView:!0,validate:{customMessage:"Test error",minLength:3,maxLength:10},errorLabel:"Please fill in only letters.",key:"textField",type:"textfield",input:!0}]};var d=t(244);var m=e=>{let n=()=>e.reduce((e,n)=>("datetime"==n.type?e[n.label.replaceAll(" ","_")]="":"checkbox"===n.type||"selectboxes"===n.type?e[n.label.replaceAll(" ","_")]=[]:"button"!==n.type&&"datetime"!==n.type&&"checkbox"!==n.type&&(e[n.label.replaceAll(" ","_")]=""),e),{});return'\n    import React, { useState } from "react";\n    import axios from "axios";\n    import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";\n    \n    const Add = ({ isOpen, toggle, getData }) => {\n     \n      const [form, setForm] = useState('.concat(JSON.stringify(n()),');\n\n\n      const handleChange = (e) => {\n        setForm((prevData) => {\n          const { name, value, type, checked } = e.target;\n      \n          if (type === "checkbox") {\n            if (checked) {\n              // Add the value to the array\n              const updatedArray = prevData[name] ? [...prevData[name], value] : [value];\n              return { ...prevData, [name]: updatedArray };\n            } else {\n              // Remove the value from the array\n              return {\n                ...prevData,\n                [name]: prevData[name].filter((item) => item !== value),\n              };\n            }\n          } else {\n            return { ...prevData, [name]: value };\n          }\n        });\n      };\n      \n\n      const handleSubmit = () => {\n        axios\n          .post(process.env.REACT_APP_BASE_URL + "savecruds", form)\n          .then((result) => {\n            getData();\n            close();\n          })\n          .catch((error) => {\n            console.log("Error", error);\n          });\n      };\n\n      const close = ()=>{\n        toggle();\n        setForm(').concat(JSON.stringify(n()),");\n      }\n      \n      return (\n        <Modal isOpen={isOpen} toggle={close}>\n          <ModalHeader>\n            Add\n          </ModalHeader>\n          <ModalBody>\n          <div>\n          ").concat(e.length>0&&e.map((e,n)=>{if(e.type&&"button"!==e.type){const n="phoneNumber"===e.type?"number":e.type,a=1==(e.validate&&e.validate.required)?l.a.createElement("span",{style:{color:"red"}},"*"):"";return"datetime"===e.type?'\n          <div>\n          <label className="d-inline-block mt-2">\n          '.concat(e.label,"\n          ").concat(a,'\n          \n          </label>\n          <input\n          type="datetime-local"\n          className="d-block mt-2 w-100 p-1"\n          onChange={handleChange}\n          name="').concat(e.label.replaceAll(" ","_"),'"\n          id="').concat(e.label.replaceAll(" ","_"),'"\n          />\n          </div>'):"select"===e.type?'\n          <div>\n          <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n          <select\n          className="form-control"\n          onChange={handleChange}\n          name="').concat(e.label.replaceAll(" ","_"),'"\n          className="d-block mt-2 w-100 p-1"\n          >\n          <option value="">Please choose an option</option>\n          ').concat(e.data.values?e.data.values.map(e=>'<option value="'.concat(e.value,'">').concat(e.label,"</option>")):"","\n          </select>\n          </div>"):"checkbox"===e.inputType?'\n          <div>\n          <label className="d-inline-block mt-2"> '.concat(e.label,'</label>\n          <div className="d-flex mt-2 flex-wrap">\n          ').concat((null===e||void 0===e?void 0:e.values)?null===e||void 0===e?void 0:null===(t=e.values)||void 0===t?void 0:t.map(n=>'<div className="form-check w-25 mt-2">\n          <input\n          type="checkbox"\n          className="form-check-input"\n          onChange={handleChange}\n          name="'.concat(e.label.replaceAll(" ","_"),'"\n          value="').concat(n.value,'"\n          id="').concat(n.value,'"\n          />\n          \n          <label className="d-inline-block">').concat(n.label,"</label> </div>")).join(""):"","\n          </div>\n          </div>"):"radio"===e.type?'\n          <div className="mt-2">\n          <label>'.concat(e.label,'</label>\n          <div className="d-flex flex-wrap">\n          ').concat(e.values?e.values.map(n=>'\n          <div className="w-25 mt-2">\n          <input type="'.concat(e.type,'" id="').concat(n.value,'" name="').concat(e.label.replaceAll(" ","_"),'" value="').concat(n.value,'" onChange={handleChange} className="me-2"/>\n          <label for="').concat(n.value,'">').concat(n.label,"</label>\n          </div>\n          ")).join(""):"","\n          </div>\n          </div>"):"textarea"===e.type?'<div>\n          <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n          <textarea className="d-block mt-2 w-100 p-1" \n          onChange={handleChange}\n          name="').concat(e.label.replaceAll(" ","_"),'"\n          placeholder="Enter ').concat(e.label,'" >\n          </textarea>\n          </div>'):"selectboxes"===e.type?'\n           <div className="mt-2">\n           <label>'.concat(e.label,'</label>\n           <div className="d-flex mt-2 flex-wrap">\n           ').concat(e.values?e.values.map(n=>'\n           <div className="form-check me-5">\n           <input type="'.concat(e.inputType,'" id="').concat(n.value,'" className="form-check-input" name="').concat(n.label.replaceAll(" ","_"),'" onChange={handleChange} />\n          <label className="d-inline-block">').concat(n.label,"</label>\n          </div>\n          // ")).join(""):"","          \n          </div>\n          </div>"):'\n          <div>\n          <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n          <input\n          type="').concat(n,'"\n          placeholder="Enter ').concat(e.label,'"\n          className="d-block mt-2 w-100 p-1"\n          onChange={handleChange}\n          name="').concat(e.label.replaceAll(" ","_"),'"\n          />\n          </div>');var t}return null}).join(""),'\n          </div>\n          \n          </ModalBody>\n          <ModalFooter>\n          <Button onClick={close} color="danger">Close</Button>\n          <Button onClick={handleSubmit} color="success">Submit</Button>\n          </ModalFooter>\n        </Modal>\n      );\n    };\n    \n    export default Add;\n  ')};var p=e=>'\nimport React, { useEffect, useState } from "react";\nimport axios from "axios";\nimport { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";\n\nconst Edit = ({ isOpen, toggle, getData, id }) => {\n\n  const [form, setForm] = useState({});\n  \n  const handleChange = (e) => {\n    setForm((prevData) => {\n      const { name, value, type, checked } = e.target;\n  \n      if (type === "checkbox") {\n        const updatedArray = checked\n          ? [...(prevData[name] || []), value]\n          : (prevData[name] || []).filter((item) => item !== value);\n\n        return { ...prevData, [name]: updatedArray };\n      } else if (type === "radio") {\n        return { ...prevData, [name]: value };\n      } else {\n        return { ...prevData, [name]: value };\n      }\n    });\n  };\n\n  useEffect(() => {\n    if (isOpen) {\n      getEdit();\n    }\n  }, [isOpen]);\n\n  const getEdit = () => {\n    axios\n      .get(process.env.REACT_APP_BASE_URL + "editcruds/" + id)\n      .then((item) => {\n        const formData = item.data.data;\n        setForm(formData);\n      })\n      .catch((error) => console.log(687, error));\n  };\n\n  const handleSubmit = () => {\n    axios\n      .post(process.env.REACT_APP_BASE_URL + "updatecruds/" + id, form)\n      .then((result) => {\n        console.log("successfully Updated", result);\n        toggle();\n        getData(); \n      })\n      .catch((error) => {\n        console.log("Error", error);\n      });\n  };\n\n  return (\n    <div>\n      <Modal isOpen={isOpen} toggle={toggle}>\n        <ModalHeader>Edit</ModalHeader>\n        <ModalBody>\n          <div>\n            '.concat(e.length>0&&e.map((e,n)=>{if(e.type&&"button"!==e.type){const n="phoneNumber"===e.type?"number":e.type;return"datetime"===e.type?'\n                        <div>\n                          <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n                          <input\n                            type="datetime-local"\n                            className="d-block mt-2 w-100 p-1"\n                            onChange={handleChange}\n                            name="').concat(e.label.replaceAll(" ","_"),'"\n                            value={form.').concat(e.label.replaceAll(" ","_"),'}\n                            id="Checkbox"\n                          />\n                        </div>'):"select"===e.type?'\n                        <div>\n                          <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n                          <select\n                            className="form-control"\n                            onChange={handleChange}\n                            name="').concat(e.label.replaceAll(" ","_"),'"\n                            value={form["').concat(e.label.replaceAll(" ","_"),'"]}\n                          >\n                            <option value="">Please choose an option</option>\n                            ').concat(e.data.values?e.data.values.map(e=>'<option value="'.concat(e.value,'">').concat(e.label,"</option>")).join(""):"","\n                          </select>\n                        </div> \n                      "):"checkbox"===e.type?'\n                        <div>\n                          <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n                          <div className="d-flex mt-2 flex-wrap">\n                            ').concat(null===e||void 0===e?void 0:null===(t=e.values)||void 0===t?void 0:t.map(n=>'\n                                <div className="form-check me-5">\n                                <input\n                                  type="checkbox"\n                                  className="form-check-input"\n                                  onChange={handleChange}\n                                  name="'.concat(e.label.replaceAll(" ","_"),'"\n                                  value="').concat(n.value,'"\n                                  checked={form?.').concat([e.label.replaceAll(" ","_")],'?.includes("').concat(n.value,'") || false}\n                                  id="').concat(n.value,'"\n                                />\n                                <label className="d-inline-block">').concat(n.label,"</label>\n                              </div>\n                                ")).join(""),"\n                          </div>\n                        </div>"):"selectboxes"===e.type?'\n                        <div className="mt-2">\n                          <label>'.concat(e.label,'</label>\n                          <div className="d-flex mt-2 flex-wrap">\n                            ').concat(e.values?e.values.map(n=>'\n                                      <div className="form-check me-5">\n                                        <input\n                                          type="'.concat(e.inputType,'"\n                                          id="').concat(n.value,'"\n                                          value="').concat(n.value,'"\n                                          className="form-check-input"\n                                          name="').concat(e.label.replaceAll(" ","_"),'"\n                                          onChange={handleChange}\n                                          checked={form?.').concat([e.label.replaceAll(" ","_")],'?.includes("').concat(n.value,'") || false}\n                                        />\n                                        <label className="d-inline-block">').concat(n.label,"</label>\n                                      </div>")).join(""):"","\n                          </div>\n                        </div>"):"radio"===e.type?'\n                        <div className="mt-2">\n                          <label>'.concat(e.label,'</label>\n                          <div className="d-flex flex-wrap">\n                            ').concat(e.values?e.values.map(n=>'\n                                      <div className="me-5 mt-2">\n                                        <input\n                                          type="'.concat(e.type,'"\n                                          id="').concat(n.value,'"\n                                          name="').concat(e.label.replaceAll(" ","_"),'"\n                                          checked={form?.').concat([e.label.replaceAll(" ","_")],' === "').concat(n.value,'"}\n                                          onChange={handleChange}\n                                          value="').concat(n.value,'"\n                                          className="me-2"\n                                        />\n                                        <label for="').concat(n.value,'">').concat(n.label,"</label>\n                                      </div>          \n                                  ")).join(""):"","\n                        </div>\n                      </div>"):"textarea"===e.type?'<div>\n                          <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n                          <textarea className="d-block mt-2 w-100 p-1" \n                          onChange={handleChange}\n                          name="').concat(e.label.replaceAll(" ","_"),'" \n                          placeholder="Enter ').concat(e.label,'" \n                          value={form.').concat(e.label.replaceAll(" ","_"),"}\n                          >\n                          </textarea>\n                          </div>"):'\n                          <div>\n                            <label className="d-inline-block mt-2">'.concat(e.label,'</label>\n                            <input\n                              type="').concat(n,'"\n                              placeholder="Enter ').concat(e.label,'"\n                              onChange={handleChange}\n                              name="').concat(e.label.replaceAll(" ","_"),'"\n                              value={form.').concat(e.label.replaceAll(" ","_"),'}\n                              className="d-block mt-2 w-100 p-1"\n                            />\n                          </div>');var t}return null}).join(""),'\n          </div>\n        </ModalBody>\n        <ModalFooter>\n          <Button onClick={toggle} color="danger">Close</Button>\n          <Button onClick={handleSubmit} color="success">Update</Button>\n        </ModalFooter>\n      </Modal>\n    </div>\n  );\n};\n\nexport default Edit;\n');var u=()=>'\n    import React, { useState } from "react";\n    import axios from "axios";\n    import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";\n\n    const Delete = ({ isOpen, toggle, getData, id }) => {\n\n      const handleSubmit = () => {\n        axios\n        .delete(process.env.REACT_APP_BASE_URL + "deletecruds/" + id)\n          .then(() => {\n            getData();\n            toggle();\n          })\n          .catch((error) => console.log(687, error));\n      };\n      return(\n        <>\n        <Modal isOpen={isOpen} toggle={toggle}>\n          <ModalHeader>Delete</ModalHeader>\n          <ModalBody>Are you sure you want to delete this record?</ModalBody>\n          <ModalFooter>\n          <Button color="danger" onClick={toggle}>No</Button>\n          <Button color="success" onClick={handleSubmit}>Yes</Button>\n          </ModalFooter>\n        </Modal>\n        </>\n          );\n          };\n        export default Delete;\n  ';var v=()=>'{\n  "name": "myapp",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "@testing-library/jest-dom": "^5.17.0",\n    "@testing-library/react": "^13.4.0",\n    "@testing-library/user-event": "^13.5.0",\n    "axios": "^1.6.2",\n    "bootstrap": "^5.3.2",\n    "react": "^18.2.0",\n    "react-bootstrap": "^2.9.1",\n    "react-dom": "^18.2.0",\n    "react-router-dom": "^6.21.0",\n    "react-scripts": "5.0.1",\n    "reactstrap": "^9.2.1",\n    "web-vitals": "^2.1.4"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  "eslintConfig": {\n    "extends": [\n      "react-app",\n      "react-app/jest"\n    ]\n  },\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n}\n';var b=()=>'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <meta\n      name="description"\n      content="Web site created using create-react-app"\n    />\n    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />\n    \x3c!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    --\x3e\n    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n   \n    <title>React App</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"></div>\n  </body>\n</html>';var g=()=>'\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport "bootstrap/dist/css/bootstrap.min.css";\nimport { BrowserRouter } from "react-router-dom";\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nReactDOM.render(\n  <React.StrictMode>\n    <BrowserRouter>\n      <App />\n    </BrowserRouter>\n  </React.StrictMode>,\n  rootElement\n);';var h=e=>'\nimport React, { useEffect, useState } from "react";\nimport { Table, Button } from "reactstrap";\nimport axios from "axios";\nimport Add from "./Add/index";\nimport Edit from "./Edit/index";\nimport Delete from "./Delete/index";\n\nfunction Index({ json }) {\n  const [data, setData] = useState([]);\n  const [toggle, settoggle] = useState(false);\n  const [edittoggle, setEditToggle] = useState(false);\n  const [id, setId] = useState("");\n  const [deleteToggle, setDeleteToggle] = useState(false);\n  const [delId, setDelId] = useState("");\n\n  useEffect(() => {\n    getData();\n  }, []);\n\n  const getData = () => {\n    axios\n      .post(process.env.REACT_APP_BASE_URL + "getcruds")\n      .then((item) => {\n        let newData = JSON.parse(JSON.stringify(item.data.data));\n        let index = -1;\n        for (let obj of newData) {\n          index++;\n          for (let key in obj) {\n            if (Array.isArray(obj[key])) {\n              let array = [];\n              let length = obj[key].length;\n              obj[key].map((element, j) => {\n                if (length - 1 != j) {\n                  array.push((element += ", "));\n                } else array.push(element);\n              });\n              newData[index][key] = array;\n            }\n          }\n        }\n        setData(newData);\n     \n      })\n      .catch((error) => console.log("error", error));\n  };\n\n  const openAddModal = () => {\n    settoggle(true);\n  };\n\n  const closeAddModal = () => {\n    settoggle(false);\n  };\n\n  const openEditModal = () => {\n    setEditToggle(true);\n  };\n\n  const closeEditModal = () => {\n    setEditToggle(false);\n  };\n\n  const closeDeleteModal = () => {\n    setDeleteToggle(false);\n  };\n\n  const editModelToggle = (id) => {\n    setEditToggle(true);\n    setId(id);\n  };\n\n  const deleteModelToggle = (id) => {\n    setDeleteToggle(true);\n    setDelId(id);\n  };\n\n  return (\n    <div className="container">\n      <div style={{ display: "flex" }} className="mb-2 mt-2">\n        <Button style={{ marginRight: "8px" }} color="primary" onClick={openAddModal}>\n          Add\n        </Button>\n      </div>\n      <Table striped bordered hover size="sm">\n        <thead>\n          <tr>\n          <th>Id</th>\n           '.concat(e.map(e=>{if("submit"!=e.key)return"<th>"+"".concat(e.label)+"</th>"}).join(""),'\n           <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          {data.map((item, index) => (\n            <tr key={index}>\n            {Object.values(item).slice(0,-2).map((element,num)=>{ \n              if(num == 0) return <td>{index + 1}</td>\n                return <td>{element}</td>\n              })}\n              <td className="d-flex flex-nowrap">\n                <Button\n                  color="success"\n                  onClick={() => editModelToggle(item._id)}\n                  className="me-2"\n                >\n                  Edit\n                </Button>\n                <Button\n                  color="danger"\n                  onClick={() => deleteModelToggle(item._id)}\n                >\n                  Delete\n                </Button>\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </Table>\n      <Add\n        isOpen={toggle}\n        toggle={closeAddModal}\n        getData={getData}\n        json={json}\n      />\n      <Edit\n        isOpen={edittoggle}\n        toggle={closeEditModal}\n        getData={getData}\n        id={id}\n        json={json}\n      />\n      <Delete\n        isOpen={deleteToggle}\n        toggle={closeDeleteModal}\n        getData={getData}\n        id={delId}\n        json={json}\n      />\n    </div>\n  );\n}\nexport default Index;\n');var f=()=>'\nimport React from "react";\nimport { Routes, Route } from "react-router-dom";\nimport Index from "./components";\n\nconst App = () => {\n  return (\n    <Routes>\n      <Route path="/" element={<Index />} />\n    </Routes>\n  );\n};\n\nexport default App;\n  ',y=t(1342),x=t(364),E=t.n(x);var k=()=>"REACT_APP_BASE_URL= http://localhost:5000/cruds/";function A(){const[e,n]=Object(a.useState)(i),t=async e=>{e.map(e=>(e.label=e.label.replace(/Date \/ Time/g,"Date Time"),e),[]),console.log(213,e),console.log("isRequired",e.map(e=>e.validate).map(e=>e.required));const n=JSON.stringify(e,(()=>{const e=new WeakSet;return(n,t)=>{if("object"===typeof t&&null!==t){if(e.has(t))return;e.add(t)}return t}})());await y.a.post("https://api-dynamic-crudoperation.imenso.in/users/getCrud",{data:JSON.parse(n)}).then(e=>{const n=e.data.data;window.location.href="https://api-dynamic-crudoperation.imenso.in/".concat(n)}).catch(e=>console.log("error",e))},o=async e=>{const n=new E.a;n.file("src/components/Add/index.js",m(e)),n.file("src/components/Edit/index.js",p(e)),n.file("src/components/Delete/index.js",u()),n.file("src/components/index.js",h(e)),n.file("package.json",v()),n.file("public/index.html",b()),n.file("src/index.js",g()),n.file("src/App.js",f()),n.file(".env",k());const t=await n.generateAsync({type:"blob"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="FrontendCode.zip",a.click()};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement("button",{className:"green mr-5 mt-4",onClick:()=>{d.Formio.createForm(document.getElementById("formio-result"),{components:e.components}).then(e=>{let n=[...e.component.components];n.map((e,t)=>{let a=1;n.filter((n,l)=>{t!=l&&n.label==e.label&&(n.label+=a++)})}),t(n),o(n),e.on("submit",e=>console.log("submit",e))})},id:"helloworld"},"Download Now")),l.a.createElement("div",{className:"mr-5"},l.a.createElement(d.FormBuilder,{form:i,saveForm:e=>n(e)})),l.a.createElement("div",{style:{display:"none"}},l.a.createElement("div",{id:"formio-result"}))))}var N=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(A,null)}))),C=t(1350),D=t(1348),M=t(1351),w=t(1344),B=t(1352),_=t(1343),S=t(366),j=t.n(S),R=t(1347),O=t(1345),T=t(247),F=t.n(T);var P=function(){const[e,n]=a.useState(null),[t,l]=a.useState(null);return a.createElement(C.a,{position:"static"},a.createElement(R.a,{maxWidth:"xl"},a.createElement(M.a,{disableGutters:!0},a.createElement(F.a,{sx:{display:{xs:"none",md:"flex"},mr:1,fontSize:25}}),a.createElement(B.a,{variant:"h6",noWrap:!0,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none",fontSize:25}},"Form-builder"),a.createElement(D.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},a.createElement(w.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{n(e.currentTarget)},color:"inherit"},a.createElement(j.a,null)),a.createElement(_.a,{id:"menu-appbar",anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(e),onClose:()=>{n(null)},sx:{display:{xs:"block",md:"none"}}})),a.createElement(F.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),a.createElement(B.a,{variant:"h5",noWrap:!0,sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"}},"LOGO"),a.createElement(D.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),a.createElement(D.a,{sx:{flexGrow:0}},a.createElement(O.a,{title:"Open settings"}),a.createElement(_.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:()=>{l(null)}})))))};var L=e=>{let{children:n}=e;return l.a.createElement("div",null,l.a.createElement(P,null),n)};var I=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(L,null,l.a.createElement(N,null)));var U=()=>l.a.createElement(I,null);const z=document.getElementById("root");c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,null,l.a.createElement(U,null))),z)},383:function(e,n,t){e.exports=t(1290)},391:function(e,n,t){}},[[383,1,2]]]);
//# sourceMappingURL=main.521d0ca7.chunk.js.map