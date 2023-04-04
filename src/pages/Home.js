import "./base.css";
import styles from "./Home.module.css";
import "./raster.css";
import diagram from "./figures/diagram.svg";
import mechanism from "./figures/mechanism.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigatePlayground = () => {
    navigate(`/Playground`);
  };

  return (
    <div className="Home max-w-3xl mx-auto">
      <h1 id={styles.title}>Introducing Hashbrown.</h1>

      <r-grid columns="6" columns-s="2">
        <r-cell span="2" span-s="2">
          <p className="pb-4 pr-4">
            Hashbrown is a file encryption protocol that divides and distributes files on centralized servers but rather
            saving each division's hash on blockchain through a smart contract.
          </p>
        </r-cell>
        <r-cell span="4">
          <img src={diagram} alt="Hashbrown diagram" />

          <a className={styles.quicklinks} href="https://github.com/Hashbrown-inc/Hashbrown">
            <span>Source Code</span>
          </a>

          <div
            className={`${styles.quicklinks} ${styles.sm}`}
            onClick={() => {
              navigatePlayground();
            }}>
            <span>Playground</span>
          </div>
        </r-cell>
      </r-grid>

      <hr></hr>

      <r-grid columns="6" columns-s="2">
        <r-cell span="2">
          <h2 className="pb-4">Mechanism</h2>
        </r-cell>
        <r-cell span="4" span-s="2">
          <p>
            Hashbrown processes the data by computing the hash of a given file and partitioning it into smaller
            segments. The objective is to store the file data in a centralized server infrastructure, where each server
            contains hundreds of buckets to host the file segments, distributed randomly across them.
          </p>
          <br></br>
          <p>
            The metadata related to the file, such as the hash value of the entire file and the location of the
            individual segments within the buckets, is stored in a smart contract.
          </p>
          <img src={mechanism} alt="Hashbrown mechanism" className="mt-6" />
        </r-cell>
      </r-grid>

      <hr></hr>

      <r-grid columns="6" columns-s="2">
        <r-cell span="2">
          <h2 className="pb-4">Security & Encryption</h2>
        </r-cell>

        <r-cell span="4" span-s="2">
          <p>
            Hashbrown uses a permissioned blockchain to store encrypted key data and access control information. The
            files are encrypted using the Advanced Encryption Standard (AES) algorithm and are split into smaller parts
            using a sharding algorithm, and each part is stored on a different node in the network. Access to the
            encrypted files is controlled by the key stored on the blockchain, and only authorized parties with the
            correct key can access the files.
          </p>
          <pre
            dangerouslySetInnerHTML={{
              __html: `const <strong>encryptedParts</strong> = fileParts.map(part => {
  return <strong>CryptoJS.AES.encrypt</strong>(part.toString('base64'), secretKey).toString();
});

const uploadPromises = encryptedParts.map(async (part, index) => {
  const serverUrl = serverUrls[index % serverUrls.length];
  const formData = new FormData();
  formData.append('file', new Blob([part], { type: 'text/plain' }), \`part-\${index}.txt\`);

  try {
    await axios.post(serverUrl, formData, {
      headers: {
        'Content-Type': \`multipart/form-data; boundary=\${formData._boundary}\`,
      },
    });
    console.log(\`Uploaded part \${index} to \${serverUrl}\`);
  } catch (error) {
    console.error(\`Failed to upload part \${index} to \${serverUrl}: \${error.message}\`);
  }
});
`,
            }}
          />
        </r-cell>
      </r-grid>

      <hr></hr>
      <footer>
        <p>
          @<a href="https://github.com/Hashbrown-inc/">Hashbrown inc.</a>
        </p>
      </footer>
    </div>
  );
};
export default Home;
