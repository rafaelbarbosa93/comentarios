import React from 'react'

const Comment = ({c}) => {
	const comment = c.comment || ""
	return (
		<div>Comentário: {comment}</div>
	)
}

export default Comment