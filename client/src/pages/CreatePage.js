import React from 'react';
import { useState, useEffect, useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import { useNavigate } from 'react-router-dom';

function CreatePage(props) {
	const [link, setLink] = useState('')
	const {request} = useHttp()
	const navigate = useNavigate()
	const auth = useContext(AuthContext)
	

	useEffect(()=>{
		window.M.updateTextFields()
	}, [])

	const pressHandler = async event =>{
		if(event.key === 'Enter'){
			try{
				const data = await request('api/link/generate', 'POST', {from: link}, {
					Authorization: `Bearer ${auth.token}`
				})
				console.log(data)
				navigate(`/detail/${data.link._id}`)
			}catch(e){}
		}
	}

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<div className="input-field">
          		<input 
						placeholder="Вставьте ссылку" 
						id="link" 
						type="text" 
						onChange={e=>setLink(e.target.value)}
						onKeyPress={pressHandler}
					/>
          		<label htmlFor="link">Введите ссылку</label>
        		</div>				
			</div>
		</div>
	);
}

export default CreatePage;