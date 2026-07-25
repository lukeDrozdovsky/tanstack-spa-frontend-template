import * as React from 'react'
import {Outlet, createRootRoute} from '@tanstack/react-router'
import {NavLink} from "@/components/nav-link.tsx";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <div className="container mx-auto max-w-xl">
                <div className="space-x-2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </div>
                <Outlet/>
            </div>
        </React.Fragment>
    )
}
