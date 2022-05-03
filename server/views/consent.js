module.exports = ({ name, date, signature }) => {
  const today = new Date();
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>${`${name} - Consent Form`}</title>
      <style>
        #consentForm {
          flex-direction: row;
        }
        /* section {
          margin: 10;
          padding: 10;
          flex-grow: 1;
        } */
        h1 {
          font-size: 36px;
          font-weight: bold;
          padding-bottom: 16px;
          text-align: center;
        }
        h2 {
          font-size: 24px;
          font-weight: bold;
          padding-bottom: 8px;
          text-align: center;
        }
        h3 {
          font-size: 18px;
          font-weight: bold;
          padding-bottom: 18px;
        }
        p {
          font-size: 16px;
        }
        .user-details {
          font-size: 16px;
          padding-bottom: 8px;
        }
        img {
          width: 210;
          height: 49;
        }
      </style>
    </head>
    <body>
      <div id="consentForm">
      <img src="data:image/png;base64,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" width="309" height="88" alt="Marathon Health Logo"/>
      <h1>Consent Form</h1>
        <div>
          <div>
            <h2>What is Lorem Ipsum?</h2>
            <p>
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem
              Ipsum.
            </p>
          </div>
          <div>
            <h2>Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web
              sites still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected humour
              and the like).
            </p>
          </div>
          <br />
          <div>
            <h2>Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor
              at Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
              of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
          <br />
          <div>
            <h2>Where can I get some?</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet tend
              to repeat predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>
          </div>
          <br />
        </div>
        <div>
          <div class="user-details">
            <p>Name: <strong>${name}</strong></p>
            <p>Date: <strong>${date}</strong></p>
            <p>Signature: <img src="${signature}" width="180" height="42" /></p>
          </div>
        </div>
      </div>
    </body>
  </html>
   `;
};
