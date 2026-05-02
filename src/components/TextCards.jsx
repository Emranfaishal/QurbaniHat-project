
const TextCards = () => {
    return (
        <div className="text-center bg-gray-400 p-20 space-y-5">
            <div className="text-[#FD2951]">
                <h2 className="text-5xl font-bold">Islamic Touch</h2>
            </div>


            <div className="join join-vertical bg-base-100  rounded-xl">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold">Big and catchy headlines</div>
                    <div className="collapse-content text-sm">Huge gathering of animals on the occasion of Eid-ul-Adha,Sacrifice of faith .</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Subhead / Supporting Line</div>
                    <div className="collapse-content text-sm">Large collection of indigenous and farm-bred cattle and goats ,Health tested and</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Message of trust and quality</div>
                    <div className="collapse-content text-sm">Trust is our main strengthEvery animal is nurtured with care animal is nurtured</div>
                </div>
            </div>
        </div>
    );
};

export default TextCards;