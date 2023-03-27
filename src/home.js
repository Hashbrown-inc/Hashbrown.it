import "./index.css";
import "./raster.css";
import { Link } from "react-router-dom";
import diagram from "./diagram.svg";

const Home = () => (
    <div>
      <h1 id="title">Introducing Hashbrown.</h1>

      <r-grid columns="6" columns-s="2">
        <r-cell span="2" span-s="2">
          <p className="pb-4 pr-4">
            Hashbrown is a file encryption protocol that divides and distributes files on the blockchain rather than
            using centralized storage.
          </p>
        </r-cell>
        <r-cell span="4">
          <img src={diagram} alt="Hashbrown diagram" />

          <a className="quick-links" href="https://github.com/Hashbrown-inc/Hashbrown-Web">
            <span>Source Code</span>
          </a>

          <Link to="/signup">
          <a className="quick-links sm">
            <span>Playground</span>
          </a>
        </Link>
        </r-cell>
      </r-grid>

      <hr></hr>

      <r-grid columns="6" columns-s="2">
        <r-cell span="2">
          <h2 className="pb-4">Security First</h2>
        </r-cell>

        <r-cell span="4" span-s="2">
          <p>
            Hashbrown uses a permissioned blockchain to store encrypted key data and access control information. The
            files are encrypted using the Advanced Encryption Standard (AES) algorithm and are split into smaller parts
            using a sharding algorithm, and each part is stored on a different node in the network. Access to the
            encrypted files is controlled by the key stored on the blockchain, and only authorized parties with the
            correct key can access the files.
          </p>
          <pre>
            {`contract HashbrownAccessControl { 

mapping(address => bytes32) authorizedParties;

function addAuthorizedParty(address party, bytes32 key) public {
require(authorizedParties[msg.sender] != bytes32(0), "Only authorized parties can add new authorized parties.");
authorizedParties[party] = key;
}

function removeAuthorizedParty(address party) public {
require(authorizedParties[msg.sender] != bytes32(0), "Only authorized parties can remove authorized parties.");
delete authorizedParties[party];
}

function getKey(address party) public view returns (bytes32) {
require(authorizedParties[party] != bytes32(0), "Party is not authorized.");
return authorizedParties[party];
}

modifier onlyAuthorized() {
require(authorizedParties[msg.sender] != bytes32(0), "Unauthorized access.");
_;
}
}
`}
          </pre>
        </r-cell>
      </r-grid>

      <hr></hr>

      <r-grid columns="6" columns-s="2">
        <r-cell span="2">
          <h2 className="pb-4">How does it work?</h2>
        </r-cell>
        <r-cell span="4" span-s="2">
          <p>Dunno yet.</p>
        </r-cell>
      </r-grid>
    </div>
  );
