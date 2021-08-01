import React, { useState , useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useDispatch,useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';

import {AddProudct , CatgoriesAdd} from '../../compent/js/action/authActions'
const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  useEffect(()=>{
    dispatch(CatgoriesAdd())
},[])
const Catgories = useSelector(state => state.Cagories.CatgoryAll)
var formData = new FormData()

const converbase64=(file)=>{
  return new Promise((resolve,reject)=>{
    const fileReder=new FileReader()
    fileReder.readAsDataURL(file)
    fileReder.onload=()=>{
      resolve(fileReder.result)
    }; 
    fileReder.onerror=(error)=>{
      reject(error)
    }
  });
  
}
const Tefse =async ()=>{
  const base64=await converbase64(file)
  console.log(base64)
}
const dispatch = useDispatch()
const [Name , setName]=useState()
const[prix , setPrix]=useState()
const[Descraption , setDescraption]=useState()
const[file , setfile]=useState()
const[Catgory , setCatgory]=useState()
console.log(file)
formData.append('Catgory',Catgory)
formData.append('articleImage',file)
formData.append('Name',Name)
formData.append('Prix',prix)
formData.append('Descraption',Descraption)
const Add =()=>{
  Tefse()
    dispatch(CatgoriesAdd({name:Catgory}))
    dispatch(AddProudct(formData))
    setModal(!modal)
}
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="Modal01">
      <Button color="danger" onClick={toggle}>Add</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <p>Name</p>
            {console.log(Name)}
            <TextField value={Name} onChange={(e)=>setName(e.target.value)}></TextField>
            <p>Descraption</p>
            <TextField value={Descraption} onChange={(e)=>setDescraption(e.target.value)}></TextField>
            {console.log(Descraption)}
        <p>Prix</p> 
        <TextField type="Number" value={prix} onChange={(e)=>setPrix(e.target.value)}></TextField>
        <p>Catgory</p>
        {Catgories&&Catgories.map((el)=>
          <>
          <div className="ml-2 mt-2">
          <button onClick={()=>setCatgory(el.name)}> {el.name}</button>
          </div>
       
        </>

        )}
        <TextField value={Catgory} onChange={(e)=>setCatgory(e.target.value)}/>
            <p>Upload Image</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAuCAYAAABNhcu5AAAABHNCSVQICAgIfAhkiAAAAeZJREFUWEftWT1PwlAUPa8RUCQgoSbg5OTGYpycdNFFYqL+AJ1c9R/wD5zdcHcwsjk56aI/QCccwEFQ+QgJQvvMbUVKW6CQtljTl5CQwnv35Jx7z7u5ZR9ZvtCEfAaGPXBE4f7KhSGcsmK2cwWwXffj9yIy4IIVsxKnR2JGQGDJXTjtElDOy+DA5y+Q1LHgLoqfaK/nsvLNB9Kl3xuMvF3K6FScSZmACIj7vXwcykj3R2egANrCsATE7krqBvWB6CvEZ+T/MDL18nXS0GYSwOKBRUNzigmzc71x1/iMEAPD7hXeAprPHPNpZjtZY+VI44Gj/siRyAgI2tzXegcIyfF+oza2Ul39UFPDgkAoxRBZM8qk3aPXcNCekYzQoWRsUsOYFrPLQHzb2PUT2Mq1+Z7wCkNs0wh+JBBteD9H9GK0y0CroJYvC9lbwWNJY2/o/tN8IHp2vcUI+ULtXkZkVVDMrPnE0XrhiG+ZTw4cMTSi8KsEVPKyUilUMeQn5KzJI3MgjhoasVC9VWY5Cgi6+Igdu5blHOkDEgISO4OBOC9NEIikmdIKkEzJQ5elIUet3cmIrmuStcBNL7xJpbIszaQBrO7zgXjHWac68OWo/p0RuPpSQMpxzjYYQ8xqttv1P5rDz0E4+QZWI+kIk26yTwAAAABJRU5ErkJggg=="/>
        <TextField  onChange={e=>setfile(e.target.files[0])} type="file"/>
          
        {console.log(Catgory)}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Add}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;