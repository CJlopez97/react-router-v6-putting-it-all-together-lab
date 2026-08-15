import { Link, useOutletContext } from 'react-router-dom';

const DirectorList = () => {
    const context = useOutletContext();
    const directors = context?.directors;

    if (!directors || directors.length === 0) {
        return <p>Loading directors...</p>;
    }

    return (
        <>
        <ul>
            {directors.map((d) => (
                <li key={d.id}>
                    <Link to={`/directors/${d.id}`}>{d.name}</Link>
                </li>
            ))}
        </ul>
        <Link to="/directors/new">Add New Director</Link>
        </>
    );
};

export default DirectorList;