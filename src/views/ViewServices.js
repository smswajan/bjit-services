import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useState } from "react";
import { servicesData } from "../shared/data/servicesData";

const ViewServices = () => {
    return (
        <>
            <main className="services">
                <section className="py-5 bg-light">
                    <div className="container pb-5">
                        <h1 className="text-center text-primary font-weight-bold">What kinds of project do you want to develop?</h1>
                        <p className="mt-4 text-center text-secondary">Please choose the required field below. You can choose multiple options.</p>
                        <div className="row mt-5">
                        {servicesData.map(item => <ServiceCard data={item} key={item.id}/> )}
                    
                    
                        </div>
                        <button className="btn btn-success mt-4">NEXT <span><BsArrowRight/></span> </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ViewServices;

const ServiceCard = ({data}) => {
    const [selected, setSelected] = useState(false);
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className={`service-card py-4 py-5 ${selected && 'active'}`} onClick={() => setSelected(!selected)}>
                    <div className="d-flex align-items-center justify-content-center ">
                        <div className="icon d-flex align-items-center justify-content-center bg-primary">
                            {data.icon}
                        </div>
                    </div>
                    <p className="text-center mb-0 mt-4">
                        {data.name}
                    </p>
                    {selected && <div className="check-box ">
                        <AiOutlineCheckSquare />
                    </div>}
                </div>
            </div>

        </>
    )
}

