import { usePhotosStore } from "./usePhotosStore";
import { PhotoCard } from "./PhotoCard";

export const Photos = () => {
  const photos = usePhotosStore((state) => state.photos);
  const isLoading = usePhotosStore((state) => state.isLoading);
  const error = usePhotosStore((state) => state.error);
  const fetchPhotos = usePhotosStore((state) => state.fetchPhotos);

  return (
    <div className="photos-section">

      <div className="photos-toolbar">
        <h2>Explore</h2>

        <button
          className="load-button"
          onClick={fetchPhotos}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "+ Load photos"}
        </button>
      </div>

      {isLoading && (
        <p className="loading">Loading your inspiration...</p>
      )}

      {error && (
        <div className="error">{error}</div>
      )}

      {!isLoading && photos.length > 0 && (
        <div className="photos-grid">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}

    </div>
  )
}