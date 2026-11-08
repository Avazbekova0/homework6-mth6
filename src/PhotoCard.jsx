export const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <div className="photo-image-wrapper">
        <img
          src={photo.url || photo.thumbnailUrl}
          alt={photo.title}
        />

        <button className="save-button">
          Save
        </button>
      </div>

      <div className="photo-info">
        <h3>{photo.title.slice(0, 20)}</h3>
      </div>
    </div>
  )
}