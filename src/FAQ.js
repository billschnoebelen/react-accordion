import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
    console.log(index)
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
            <div className="faq-answer">
				{faq.key}
			</div>
		</div>
	)
}

export default FAQ
