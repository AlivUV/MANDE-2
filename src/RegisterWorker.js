import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import ReactDOM from 'react-dom';
import React, {useState} from 'react';

function NewLabor (props) {
    return <div class="container" >
        <div class="row">
            <div class="col">
                <Label>
                    Oficio
                </Label>
                <Input id='labor' type='select'>
                    <option>
                        Luego se cargan
                    </option>
                </Input>
            </div>
            <div class="col">
                <Label>
                    Costo unitario
                </Label>
                <Input id='cost'/>
            </div>
        </div>
        <div class="row">
            <div class="d-flex justify-content-center align-items-center">
                <Label>
                    Unidad de trabajo
                </Label>
                <div class="p-2 bd-highlight" style={{width:'150px'}}>
                    <Input id='unity'/>
                </div>
            </div>
        </div>
    </div>
}

export default (props) => {
    const [laborArray, setLaborArray] = useState([NewLabor()]);
    const [test, setTest] = useState(true);
    return <div class="container">
        <div class="row">
            <div class="col">
                <div class="row" style={{padding: '10px'}}>
                    <div class="container" style={{ width: '150px', height: '150px', backgroundColor: 'blue' }}>
                        Primera imagen
                    </div>
                </div>
                <div class="row" style={{padding: '10px'}}>
                    <div class="container" style={{ width: '150px', height: '150px', backgroundColor: 'green' }}>
                        Segunda imagen
                    </div>
                </div>
                <div class="row" style={{padding: '10px'}}>
                    <div class="container" style={{ width: '200px', height: '200px', backgroundColor: 'yellow' }}>
                        Mapa
                    </div>
                </div>
            </div>
            <div class="col">
                <FormGroup>
                    <Label>
                        Nombre
                    </Label>
                    <Input id='name'/>
                    <Label>
                        Dirección
                    </Label>
                    <Input id='address'/>
                    <Label>
                        Cédula
                    </Label>
                    <Input id='ID'/>
                    <Label>
                        Celular
                    </Label>
                    <Input id='cellphone'/>
                    <Label>
                        Correo
                    </Label>
                    <Input id='cellphone' type='email'/>
                    <Label>
                        Género
                    </Label>
                    <Input id='gender' type='select'>
                        <option>
                            Masculino
                        </option>
                        <option>
                            Femenino
                        </option>
                        <option>
                            Otro
                        </option>
                        <option>
                            Prefiero no decirlo
                        </option>
                    </Input>
                    <Label>
                        Contraseña
                    </Label>
                    <Input id='password' type='password'/>
                    <Label>
                        Confirmar contraseña
                    </Label>
                    <Input id='confirmPassword' type='password'/>
                </FormGroup>
            </div>
        </div>
        <div class='row' style={{padding: '10px'}}>
            <div class='container' id='laborContainer'>
                {laborArray}
            </div>
        </div>
        <div class='row' style={{padding: '10px'}}>
            <div class='d-flex justify-content-center'>
                <Button outline='false' 
                        color='info'
                        onClick={()=>{
                            let array=laborArray
                            
                            
                            
                            array.push(NewLabor())
                            setLaborArray(array)
                            setTest(!test)
                            console.log(document.getElementById('laborContainer'))
                            console.log(laborArray)
                        }}
                >Añadir oficio, hay {laborArray.length}</Button>
            </div>
        </div>
        <div class='row'>
            <div class='d-flex justify-content-around'>
                <Button>Regresar</Button>
                <Button color='success'>Registrar</Button>
            </div>
        </div>
    </div>
}