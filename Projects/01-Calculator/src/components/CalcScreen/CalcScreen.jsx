export const CalcScreen = ({ screen }) => {
  return (
    <div className="bg-d-screen-bg p-6 text-right rounded-xl">
      <h2>{screen ? screen : 0}</h2>
    </div>
  );
};
