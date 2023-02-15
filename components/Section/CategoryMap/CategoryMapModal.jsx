import CardProduct from '@/components/CardProduct';
import { Modal, Tooltip, Button } from 'flowbite-react';
import { useState } from 'react';

const CategoryMapModal = ({ label, product }) => {
  const [show, setShow] = useState(false);
  const isModal = typeof window !== 'undefined';

  return (
    <>
      <Tooltip
        content={`Telusuri Produk Dari Provinsi ${label}`}
        style="light"
        animation="duration-500"
      >
        <Button
          className="lg:w-[700px] w-[300px]"
          gradientMonochrome="info"
          pill={true}
          onClick={() => setShow(true)}
        >
          {label}
        </Button>
      </Tooltip>

      {isModal ? (
        <Modal
          size="5xl"
          position="center-right"
          show={show}
          onClose={() => setShow(false)}
        >
          <Modal.Header>{`Daftar Produk Dari ${label}`}</Modal.Header>
          <Modal.Body className="h-[500px] overflow-y-auto">
            {product.length === 0 ? (
              <p className="relative font-semibold text-white text-4xl text-center top-[50%] opacity-80">
                Daftar Produk Dari {label} Belum Tersedia.
              </p>
            ) : (
              <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-2">
                {product.map(item => {
                  return item.product_entry.map((detail, index) => (
                    <CardProduct
                      key={index}
                      label={'Terlaris'}
                      image={detail.product_image[0]?.path}
                      title={detail.product.name}
                      price={detail.selling_price}
                      weight={detail.weight}
                      slug={detail.slug}
                      productEntry={detail}
                    />
                  ));
                })}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)}>Tutup</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};

export default CategoryMapModal;
