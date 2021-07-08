import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useDispatch} from 'react-redux'
import {UpdateProduct04} from '../js/action/authActions'

const ModalExample = ({el}) => {
    const[Name , setName]=useState()
    const[Prix , setPrix]=useState()
    const[Descraption,setDescraption]=useState()
 const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
    const Update =()=>{
        dispatch(UpdateProduct04(el._id,{Name,Prix,Descraption}))
        setModal(!modal)
    }
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Update</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <p>Name</p> 
        <input value={Name} onChange={(e)=>setName(e.target.value)}></input>
        <p>Prix</p>
        <input type="Number" value={Prix} onChange={(e)=>setPrix(e.target.value)}></input>
        <p>Descraption</p>
        <input  value={Descraption} onChange={(e)=>setDescraption(e.target.value)}></input>
        {console.log(Name)}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Update}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
