import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../../Components/Dropdown/Dropdown';
import { contactList, headerText, dropdownOptions } from '../../MockData/mockData';
import { Card } from '../../Components/Card/Card';
import file from "../../images/file.png"
import link from "../../images/link.png"
import capture from "../../images/capture.png"
import "./Analyze.css"

const Analyze = () => {
    return (
        <section className="container">
            <div className="wrapper">
                <div className="wrapperA">
                    <div className="contentA">
                        <div className="listA">
                            <ul className='list'>
                                <li><Dropdown header={headerText} options={dropdownOptions} /></li>
                                <li>Lead</li>
                                <li>Opportunity</li>
                            </ul>
                        </div>
                        <div className="listB">
                            {contactList.map((item, index) => (
                                <Card
                                    key={index}
                                    name={item.name}
                                    phone={item.phone}
                                    email={item.email}
                                    website={item.website}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="footerA">
                        <div>
                            <img src={file} className='image-item' alt='file'/>
                            <img src={link} className='image-item' alt='link'/>
                            <img src={capture} className='image-item' alt='capture'/>
                        </div>
                        <div className='button-container'>
                            <button className='button-items'>Data</button>
                            <button className='button-items'>Structure</button>
                        </div>
                    </div>
                </div>
                <div className="wrapperB">
                    <div className="contentB">

                    </div>
                    <div className="footerB">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Analyze }