import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'


it('should render', () => {
	const comment = {
		comment: 'test'
	}
	const wrapper = render(<Comment c={comment} />)
	expect(wrapper.text()).toBe("Comentário: test")
})

it('should render other text', () => {
	const comment = {
		comment: ''
	}
	const wrapper = render(<Comment c={comment} />)
	expect(wrapper.text()).toBe("Comentário: ")
})