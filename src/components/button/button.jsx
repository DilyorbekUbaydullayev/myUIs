import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import stl from './button.module.css'
export default ({styled,name})=> {
  return (
    <>
      <Button variant="primary" className={stl.mybutton} >{name}</Button>
     
    </>
  );
}

