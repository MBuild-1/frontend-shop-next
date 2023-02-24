import { Breadcrumb } from 'flowbite-react';
import Link from 'next/link';

const BreadCrumbList = ({ breadcrumb, ...props }) => {
  return (
    <Breadcrumb className="" {...props}>
      {breadcrumb.map(({ href, label, isCurrentPage, icon: Icon }, index) => {
        return (
          <Breadcrumb.Item
            key={index}
            isCurrentPage={isCurrentPage ? true : false}
            icon={Icon}
          >
            {isCurrentPage ? (
              <div>
                {label.length > 23 ? `${label.substring(0, 23)}...` : label}
              </div>
            ) : (
              <Link href={href}>
                {label.length > 23 ? `${label.substring(0, 23)}...` : label}
              </Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumbList;
