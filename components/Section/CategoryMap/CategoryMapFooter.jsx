import { Tooltip } from 'flowbite-react';
import CategoryMapModal from './CategoryMapModal';

const CategoryMapFooter = ({ label, product, ...props }) => {
  return (
    <div
      className="flex relative z-10 items-center justify-center py-5 pb-10"
      {...props}
    >
      <Tooltip
        content={`Telusuri Produk Dari Provinsi ${label}`}
        style="light"
        animation="duration-500"
      >
        <CategoryMapModal label={label} product={product} />
      </Tooltip>
    </div>
  );
};

export default CategoryMapFooter;
