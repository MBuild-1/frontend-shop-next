import { Button, Label, Modal, Select } from 'flowbite-react';
import LocationIcon from 'images/icons/location-off.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function SelectLocation({ countries }) {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState('');

  const isModal = typeof window !== 'undefined';

  const handleChange = event => {
    setCountry(event.target.value);
  };

  return (
    <div className="relative group top-24 -left-[11rem] sm:top-0 sm:left-0">
      <div className="flex relative items-center">
        <Image src={LocationIcon} alt={'location'} width={25} height={25} />
        <button
          className="flex lg:flex-col md:flex-col gap-2 lg:gap-0 md:gap-1 items-center lg:items-start md:items-start"
          onClick={() => setShow(true)}
        >
          <p className="text-[0.7rem] lg:text-[0.7rem] md:text-[0.7rem] text-[#898989] group-hover:text-black">
            Dikirim ke
          </p>
          <p className="text-[0.9rem] lg:text-[0.9rem] md:text-[0.8rem] font-bold text-[#898989] group-hover:text-[#FF4200]">
            {country
              ? country.length >= 12
                ? country.substring(0, 9) + '...'
                : country
              : 'Pilih Negara'}
          </p>
        </button>
        {isModal ? (
          <Modal show={show} onClose={() => setShow(false)}>
            <Modal.Header>Pilih Lokasi Kamu</Modal.Header>
            <Modal.Body>
              <div id="select">
                <div className="mb-2 block">
                  <Label value="Pilih Negara" />
                </div>
                <Select required={true} onChange={handleChange}>
                  <option value="">none</option>
                  {countries.map((i, x) => (
                    <option key={x} value={i.name}>
                      {i.name}
                    </option>
                  ))}
                </Select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShow(false)}>Pilih</Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}
