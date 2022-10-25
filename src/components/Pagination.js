import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationComponent = (props) => {

	const { pageno, perpage = 0, onClick } = props;
	let pagesList = []
	console.log('props', props)
	if(typeof perpage !== 'undefined' && perpage > 0) {
			pagesList =  Array.from({ length: perpage}, (_,i) => i + 1 );
	}
	return (<Pagination>
 				{/* <Pagination.First /> */}
      			<Pagination.Prev />
					{ pagesList.map((page,i) => {
						return <Pagination.Item active={pageno === page} key={ page + i} onClick={ e => onClick(page) }>{page}</Pagination.Item>
						})
					}
				<Pagination.Next />
		      	{/* <Pagination.Last /> */}
		</Pagination>)
}
export default PaginationComponent;