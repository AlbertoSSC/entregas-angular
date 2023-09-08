import { Component } from '@angular/core';

import { imagesList } from './gallery-imgs.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  imagesList = imagesList;

  imagesPerPage = 3;
  currentPage = 0;

  selectedImage = imagesList[0];

  currentIndex = 0;
  prevDisabled = true;
  nextDisabled = false;

  imageWidth = 350;
  imageHeight = 350;

  slideShowInterval: any;
  playDisabled = false;
  stopDisabled = true;

  emphasizeSelectedImage(image: any) {
    let imageClass = '';
    if (this.imagesList.indexOf(image) === this.currentIndex)
      imageClass = 'emphasize-selected-image';
    return imageClass;
  }

  resetImageSize() {
    this.imageWidth = 350;
    this.imageHeight = 350;
  }

  selectImage(image: any) {
    this.selectedImage = image;
    this.currentIndex = this.imagesList.indexOf(image);

    this.resetImageSize();
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectImage(this.imagesList[this.currentIndex]);
      if (
        this.currentPage !== 0 &&
        (this.currentPage = Math.ceil(this.currentIndex / this.imagesPerPage))
      ) {
        this.currentPage--;
      }
    }
  }

  nextImage() {
    if (this.currentIndex < this.imagesList.length - 1) {
      this.currentIndex++;
      this.selectImage(this.imagesList[this.currentIndex]);
      if (this.currentIndex === (this.currentPage + 1) * this.imagesPerPage) {
        this.currentPage++;
      }
    }
  }

  increaseImage() {
    this.imageWidth += 50;
    this.imageHeight += 50;
  }

  decreaseImage() {
    if (this.imageWidth > 50 || this.imageHeight > 50) {
      this.imageWidth -= 50;
      this.imageHeight -= 50;
    }
  }

  playSlideShow() {
    this.playDisabled = true;
    this.stopDisabled = false;

    const slideShow = () => {
      if (this.currentIndex === (this.currentPage + 1) * this.imagesPerPage) {
        this.currentIndex = this.currentPage * this.imagesPerPage;
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.imagesList.length;
      }

      if (this.currentIndex === 0) this.currentPage = 0;
      if (this.currentIndex === 3) this.currentPage = 1;
      if (this.currentIndex === 6) this.currentPage = 2;

      this.selectImage(this.imagesList[this.currentIndex]);
    };

    this.slideShowInterval = setInterval(slideShow, 1000);
  }

  stopSlideShow() {
    this.playDisabled = false;
    this.stopDisabled = true;

    clearInterval(this.slideShowInterval);
  }

  previousPage() {
    if (this.currentPage > 0) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages() - 1) this.currentPage++;
  }

  totalPages(): number {
    return Math.ceil(this.imagesList.length / this.imagesPerPage);
  }
}
