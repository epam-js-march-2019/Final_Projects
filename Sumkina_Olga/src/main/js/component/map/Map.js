import React from 'react'
import ReactDOM from 'react-dom'

export default class Maps extends React.Component {
    render () {
        return (
            <section>
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5908.523294221423!2d30.34277398155967!3d59.908697949698265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469630497f9cb8e3%3A0xa6e601f65dda367a!2z0J3QsNGA0L7QtNC90YvQuSDQtNC-0Lwg0JDQktCY0J8!5e0!3m2!1sru!2sru!4v1558271079716!5m2!1sru!2sru"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            </section>
        )
    }
}