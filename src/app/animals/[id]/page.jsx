

const allCowDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const res = await fetch('https://qurbani-hat-project.vercel.app/cowdata.json');
    const cows = await res.json();
    const cow=cows.find(c=>c.id==id);
    console.log(cow);
    return (
        <div>
            <h2>{cow.name}</h2>
        </div>
    );
};

export default allCowDetailsPage;