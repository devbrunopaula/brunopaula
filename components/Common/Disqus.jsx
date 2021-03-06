import React from 'react'
import {DiscussionEmbed} from 'disqus-react'

const DisqusComments = ({title, id}) => {
	const disqusShortname = 'https-brunopaula-com'
	const disqusConfig = {
		url: `http://brunopaula.com/portfolio-details?id=${id}`,
		identifier: id, // Single post id
		title: title, // Single post title
	}
	return (
		<>
			<DiscussionEmbed
				shortname={disqusShortname}
				config={disqusConfig}
			/>
		</>
	)
}
export default DisqusComments
