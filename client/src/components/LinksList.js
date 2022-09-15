import React from 'react';
import {Link} from 'react-router-dom'

function LinksList({links}) {
	if(!links.length){
		return <p>no have links</p>
	}

	return (
		<div>
			<table>
        <thead>
          <tr>
              <th>origin</th>
              <th>noorigin</th>
              <th>open</th>
          </tr>
        </thead>

        <tbody>
		  		{
					links.map((link, index)=>{
						return (
							<tr key ={link._id}>
            				<td>{index + 1}</td>
            				<td>{link.from}</td>
            				<td>{link.to}</td>
            				<td>
									<Link to={`/detail/${link._id}`}>Открыть</Link>
								</td>
          				</tr>
						)
					})
				}
          
         
        </tbody>
      </table>
		</div>
	);
}

export default LinksList;