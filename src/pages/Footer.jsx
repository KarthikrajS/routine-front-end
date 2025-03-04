import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">TaskFlow</h3>
                    <p>Simplify your task management and boost productivity.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Product</h3>
                    <ul>
                        <li><a className="hover:underline" href="#">Features</a></li>
                        <li><a className="hover:underline" href="#">Pricing</a></li>
                        <li><a className="hover:underline" href="#">Documentation</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Company</h3>
                    <ul>
                        <li><a className="hover:underline" href="#">About</a></li>
                        <li><a className="hover:underline" href="#">Blog</a></li>
                        <li><a className="hover:underline" href="#">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Connect</h3>
                    <ul className="flex space-x-4">
                        <li><a className="hover:underline" href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="hover:underline" href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a className="hover:underline" href="#"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© 2025 TaskFlow. All rights reserved.</p>
            </div>
        </footer>
    )
}


export default Footer