import React from "react";
import Link from "next/link";

interface BreadcrumbsHeaderProps {
  getBreadCrumbs: any;
}

const BreadcrumbsHeader: React.FC<BreadcrumbsHeaderProps> = ({
  getBreadCrumbs,
}) => {
  const breadcrumbs = [{ label: "Home", href: "/" }];
  if (getBreadCrumbs && getBreadCrumbs.length > 0)
    getBreadCrumbs.map((breadcrumb: any) => {
      breadcrumbs.push({
        href: breadcrumb.id,
        label: breadcrumb.name,
      });
    });

  return (
    <nav aria-label="Breadcrumb" className="uppercase font-bold text-sm">
      <ol className="flex flex-wrap gap-x-2 gap-y-1 whitespace-nowrap">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              {index > 0 && <span>/</span>}
              {isLast ? (
                <span className="text-primary">{breadcrumb.label}</span>
              ) : (
                <Link href={breadcrumb.href} className="hover:text-primary">
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbsHeader;
