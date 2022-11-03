import React, {Component} from 'react';

import MovieList from './MovieList';

class Movie extends Component{
    constructor(){
        super()
        this.state ={
        photos: []
        }
    }

    getAllProducts(url,handle){
        fetch(url)
            .then(response => response.json())
            .then(json => handle(json))
            .catch((error) => console.error(error))
    }


    componentDidMount(){
        this.getAllProducts('/api/products', this.mostrarInfo);
    }

    mostrarInfo = (apiProducts) => {
        // console.log(apiProducts)
        this.setState({
            photos: apiProducts.data.map(photo => {
                return{
					id: photo.id,
                    name: photo.name,
					image: photo.image,
					price: photo.price
                }
            })
        })
        // console.log(this.state)
    }
    
    render(){
        return(
            <>
			<h1 className="h3 mb-2 text-gray-800">All the photos in the Database</h1>
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>		
									<th>Id</th>
									<th>Titulo</th>
									<th>Link</th>
									<th>Price</th>										
								</tr>
							</thead>		
							<tbody>
								{
									this.state.photos.map((photo) => {
										
										return(
											<tr>
												<td>{photo.id}</td>
												<td>{photo.name}</td>
												<td>{photo.image}</td>												
												<td>{photo.price}</td>
											</tr>								
										)
									})
								}
							</tbody>
							
						</table>
					</div>
				</div>
			</div>
 
            </>
        );
    }



}

export default Movie;