import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typed from 'react-typed'
import { smoothScroll } from '../../utilities'
import './stars.scss'
import './style.scss'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface IntroProps {
    headline?: string
    typed?: string[]
}

export const Intro: React.FC<IntroProps> = props => (
    <div id="home" className="intro bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="intro-content display-table">
            <div className="table-cell">
                <Container>
                    <h1 className="intro-title mb-4">{props.headline}</h1>
                    <p className="intro-subtitle">
                        <span className="text-slider-items"></span>
                        <strong className="text-slider">
                            <Typed
                                strings={props.typed}
                                typeSpeed={80}
                                backDelay={1100}
                                backSpeed={30}
                                loop
                            />
                        </strong>
                    </p>
                    <p className="pt-3">
                        <a
                            className="btn btn-primary btn-lg js-scroll px-4"
                            href="#about"
                            role="button"
                            onClick={(e: any) => smoothScroll(e, 'about')}
                        >
                            <FontAwesomeIcon icon={faChevronDown as IconProp} />
                        </a>
                    </p>
                </Container>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state: RootState) => {
    return state.portfolio.intro
}

export default compose(connect(mapStateToProps))(Intro)
