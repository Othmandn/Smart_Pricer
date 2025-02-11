/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-modal";
import Toggle from "react-toggle";
import ToggleButton from "./ToggleButton";
import logo from "../assets/logo-em.png";
import coche from "../assets/coche.png";
import cross from "../assets/cross.png";
import "../toggle.css";

function ToggleModal({
  closeModalToggle,
  modalToggleIsOpen,
  setModalToggleIsOpen,
  setModalFormOpen,
  resetFormModal,
}) {
  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
  };
  const [toggleStates, setToggleStates] = useState({
    os: false,
    ram: false,
    memory: false,
    screen: false,
    network: false,
    charger: false,
  });
  const resetToggleStates = () => {
    setToggleStates({
      os: false,
      ram: false,
      memory: false,
      screen: false,
      network: false,
      charger: false,
    });
  };

  const handleToggleChange = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleAll = () => {
    const allTrue = Object.values(toggleStates).every(
      (state) => state === true
    );
    const updatedStates = {};

    Object.keys(toggleStates).forEach((key) => {
      updatedStates[key] = !allTrue;
    });

    setToggleStates(updatedStates);
  };
  return (
    <Modal
      isOpen={modalToggleIsOpen}
      onRequestClose={() => {
        closeModalToggle();
        resetToggleStates();
      }}
      style={customModalStyles}
      className=" w-[95%] border-2 border-solid border-blue-950 xl:border-none xl:p-0 h-fit xl:custom-bg2-color xl:w-[80%] rounded-2xl fixed top-[45%] xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex"
      contentLabel="Modal"
    >
      <div className="hidden xl:mr-auto xl:w-[25%] xl:flex xl:flex-col xl:justify-between xl:p-5">
        <h1 className="text-white text-center text-2xl">VERIFICATION</h1>
        <div className="flex flex-col gap-3 mt-5">
          <p className="text-white  leading-loose text-sm">
            1 - Je vérifie à l'aide de la checklist si mon modèle est admissible
          </p>
          <p className="text-white  leading-loose  text-sm">
            2 - Je remplis en détails les caractéristiques pour estimer la
            valeur de mon modèle
          </p>
          <p className="text-white  text-sm leading-loose">
            3 - Je récupère le récapitulatif complet pour mon modèle
          </p>
        </div>
        <img src={logo} alt="logo" className="w-[17dvw] block mr-auto" />
      </div>
      <div className="w-full p-5 xl:h-full bg-img-mob xl:bg-img xl:text-blue-950   xl:w-[75%] xl:ml-auto">
        <button
          type="button"
          className="custom-bg2-color hover:bg-blue-700 p-1  ml-auto block rounded"
          onClick={() => {
            closeModalToggle();
            resetToggleStates();
          }}
        >
          <img src={cross} alt="croix" className="xl:w-5 w-3" />
        </button>
        <h1 className="text-blue-950 text-center xl:hidden mb-4 text-2xl font-bold">
          VERIFICATION
        </h1>
        <div className="custom-bg-color xl:w-[70%] w-[95%] mx-auto mb-12 p-5 flex flex-col justify-between gap-5 xl:gap-7">
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-3 items-center">
              <img
                src={coche}
                alt="validation coche"
                className="xl:w-[2dvw] w-[5dvw]"
              />
              <h3 className="mr-2 text-blue-950 font-bold">Tout est OK ?</h3>
            </div>
            <label
              className="flex items-center cursor-pointer"
              htmlFor="toggleAll"
            >
              <Toggle
                id="toggleAll"
                className={`${
                  Object.values(toggleStates).every((state) => state === true)
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
                checked={Object.values(toggleStates).every(
                  (state) => state === true
                )}
                onChange={toggleAll}
              />
              <span className="ml-2 hidden">Toggle All</span>
            </label>
          </div>

          <ToggleButton
            label="Mise à jour supérieure à Android 8 / iOS 4 ?"
            id="Os"
            isChecked={toggleStates.os}
            handleToggleChange={() => handleToggleChange("os")}
          />
          <ToggleButton
            label="Possède t-il 4gb de ram ou plus ?"
            id="Ram"
            isChecked={toggleStates.ram}
            handleToggleChange={() => handleToggleChange("ram")}
          />
          <ToggleButton
            label="Stockage de 32gb ou plus ?"
            id="Mémoire"
            isChecked={toggleStates.memory}
            handleToggleChange={() => handleToggleChange("memory")}
          />
          <ToggleButton
            label="L'écran fait-il plus de 4 pouces ?"
            id="Ecran"
            isChecked={toggleStates.screen}
            handleToggleChange={() => handleToggleChange("screen")}
          />
          <ToggleButton
            label="Peut-il se connecter à un réseau 4G ou supérieur ? "
            id="Réseau"
            isChecked={toggleStates.network}
            handleToggleChange={() => handleToggleChange("network")}
          />
          <ToggleButton
            label="Possèdez-vous le chargeur et le câble ? "
            id="Chargeur"
            isChecked={toggleStates.charger}
            handleToggleChange={() => handleToggleChange("charger")}
          />
        </div>
        <button
          className={`custom-bg2-color hover:bg-blue-700 block mx-auto text-white font-bold p-5 mt-12 xl:w-[30%] w-[70%] rounded-lg ${
            Object.values(toggleStates).every((state) => state)
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          type="button"
          disabled={!Object.values(toggleStates).every((state) => state)}
          onClick={() => {
            setModalFormOpen(true);
            setModalToggleIsOpen(false);
            resetToggleStates();
            resetFormModal();
          }}
        >
          J'estime mon téléphone !
        </button>
      </div>
    </Modal>
  );
}

export default ToggleModal;
