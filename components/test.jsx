// HTML to jsx
// // wrong Code
// export default function Bio() {
//     return (
//       <div class="intro">
//         <h1>Welcome to my website!</h1>
//       </div>
//       <p class="summary">
//         You can find my thoughts here.
//         <br><br>
//         <b>And <i>pictures</b></i> of scientists!
//       </p>
//     );
//   }

{
  /* Right code */
}
export default function Test() {
  return (
    <div className="intro">
      <h1>Welcome to my website!</h1>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i> of scientists!
        </b>
      </p>
    </div>
  );
}
