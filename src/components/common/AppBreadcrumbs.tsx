import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs'
import React from 'react'

interface IAppBreadcrumbs {
    items: {
        name: string,
        href: string,
        startContent?: React.ReactNode
    }[],
    separator?: string
    gap?: number
}

const AppBreadcrumbs: React.FC<IAppBreadcrumbs> = ({ items, separator, gap }) => {

    return (
        <Breadcrumbs
            separator={separator}
            itemClasses={{ separator: `px-${gap}` }}
            className="bg-inherit"
        >
            {items.map((item, index) => {
                const { name, href, startContent } = item

                return (
                    <BreadcrumbItem startContent={startContent} href={href} key={index}>
                        {name}
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumbs>
    )
}

export default AppBreadcrumbs