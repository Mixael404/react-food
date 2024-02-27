import { Link, Outlet } from "react-router-dom"

function About() {
    return (
        <>
            <h1>Hello from About page</h1>
            <Link to={'contacts'}>Contacts</Link>
            <br />
            <Link to={'team'}>Team</Link>
            {/* <Routes>
                <Route path="contacts" element={<p>Our contacts</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}
            <Outlet />
        </>
    )
}

export { About }