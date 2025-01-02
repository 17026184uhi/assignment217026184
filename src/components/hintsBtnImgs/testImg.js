import GenVid1 from "C:Users\richaOneDriveDocumentsMastersWADmediaForAssgmt2genVid1.png";

function ImagePopup() {
  return (
    <div>
      <img
        src={GenVid1}
        alt="Image"
        data-bs-toggle="modal"
        data-bs-target="#imageExample"
      />

      {/* MOdal */}
      <div
        className="modal fade"
        id="imageExample"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img src="GenVid1" className="d-block w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
