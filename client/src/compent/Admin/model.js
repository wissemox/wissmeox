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

const dispatch = useDispatch()
const [Name , setName]=useState()
const[prix , setPrix]=useState()
const[Descraption , setDescraption]=useState()
const[file , setfile]=useState()
const[Catgory , setCatgory]=useState()
formData.append('Catgory',Catgory)
formData.append('articleImage',file)
formData.append('Name',Name)
formData.append('Prix',prix)
formData.append('Descraption',Descraption)
const Add =()=>{
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