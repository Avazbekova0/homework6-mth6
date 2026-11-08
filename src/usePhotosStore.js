import { create } from 'zustand'

export const usePhotosStore = create((set) => ({
    photos: [],
    isLoading: false,
    error: null,

    fetchPhotos: async () => {
        set({
            isLoading: true,
            error: null,
        });

        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/photos'
            );

            if (!response.ok) {
                throw new Error('Ошибка при загрузке фотографий');
            }

            const data = await response.json();

            set({
                photos: data,
            });

        } catch (error) {
            set({
                error: error.message || 'Неполадки',
            });

        } finally {
            set({
                isLoading: false,
            });
        }
    }
}))
