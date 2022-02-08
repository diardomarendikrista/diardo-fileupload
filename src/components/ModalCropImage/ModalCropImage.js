// documentation react-easy-crop = https://www.npmjs.com/package/react-easy-crop
import React, { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import { Wrapper, CropperWrapper } from "./styles";
import { P2Klob } from "components/Atoms/Typography/Typography";
import Modal from "components/Modal/Modal";
import Button from "components/Atoms/Button/Button";
import { getCroppedImg } from "config/utils/canvasUtils";
import { dataURLtoFile } from "config/utils/globalFunction";

const ModalCropImage = ({
  files,
  setFiles,
  uploadFile,
  beforeCrop,
  setShowModal,
  cropShape,
  aspect,
  customWidth,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    // eslint-disable-next-line
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );

      // rekonstruksi dari base64 ke file object
      let fileObject = dataURLtoFile(croppedImage, beforeCrop[0].name);
      const newFiles = [...files, fileObject];
      setFiles(newFiles);
      uploadFile(newFiles);
      setShowModal(false);
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line
  }, [imageSrc, croppedAreaPixels, rotation]);

  useEffect(() => {
    if (beforeCrop && beforeCrop[0]) {
      setImageSrc(URL.createObjectURL(beforeCrop[0]));
    }
  }, [beforeCrop]);

  return (
    <Modal
      title="Atur Gambar"
      setShowModal={setShowModal}
      customWidth={customWidth}
    >
      <Wrapper>
        {beforeCrop && (
          <>
            {/* ini kotak gambar untuk preview zoom, rotate & crop */}
            <CropperWrapper>
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                cropShape={cropShape}
                aspect={
                  aspect
                    ? aspect
                    : cropShape === "round" || cropShape === "square"
                    ? 4 / 4
                    : 4 / 3
                }
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
              />
            </CropperWrapper>

            {/* ini slider untuk atur zoom dan rotate */}
            <div className="w-100 d-flex justify-content-between">
              <label htmlFor="zoom" className="form-label me-3">
                <P2Klob bold darkSlateBlue>
                  Zoom:
                </P2Klob>
              </label>
              <input
                type="range"
                className="form-range"
                id="zoom"
                value={zoom}
                onChange={(e) => setZoom(e.target.value)}
                min={1}
                max={3}
                step={0.1}
              />
            </div>
            <div className="w-100 d-flex">
              <label htmlFor="rotation" className="form-label me-3">
                <P2Klob bold darkSlateBlue>
                  Rotasi:
                </P2Klob>
              </label>
              <input
                type="range"
                className="form-range"
                id="rotation"
                value={rotation}
                onChange={(e) => setRotation(e.target.value)}
                min={0}
                max={360}
                // min={-180}
                // max={180}
              />
            </div>
          </>
        )}
        <div>
          <Button type="button" secondary onClick={() => showCroppedImage()}>
            SELESAI
          </Button>
        </div>
      </Wrapper>
    </Modal>
  );
};

export default ModalCropImage;
