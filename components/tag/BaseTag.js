function BaseTag({ Icon, count, preText }) {
  return (
    <div
      style={{
        width: "max-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 12,
        paddingRight: 12,
        border: "1px solid #004B52",
        borderRadius: 6,
      }}
      className="hover-up"
    >
      <Icon color="#004B52" fontSize={32} />
      <span
        style={{
          fontSize: 18,
          marginLeft: 4,
          color: "#004B52",
        }}
      >
        {`${count} ${preText}`}
      </span>
    </div>
  );
}

export default BaseTag;
