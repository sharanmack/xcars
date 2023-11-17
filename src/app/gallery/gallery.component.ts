import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: string[] = [
 'https://www.hdwallpapers.in/download/black_stance_jdm_car_back_view_hd_jdm-HD.jpg',
 'https://images.wallpaperscraft.com/image/single/car_taillights_wet_152898_1600x1200.jpg',
 'https://th.bing.com/th/id/R.c0c80daff9e73390c002d6b991abbe87?rik=WVkOOr26c4Rt%2bw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fmsY7sXw.jpg&ehk=c0w%2fCpr0hkNg6UbcCCjq42waXV5rhHhv4JqI61PATEI%3d&risl=&pid=ImgRaw&r=0',
 'https://cdn.suwalls.com/wallpapers/cars/black-lamborghini-aventador-front-view-49004-1920x1200.jpg',
 'https://wallpapercave.com/wp/wp5055267.jpg',
 'https://th.bing.com/th/id/R.e18dde5b623fb150283f512cf2bcc86f?rik=Fh30vduZIm6NEA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f1BdD4VK.jpg&ehk=%2bUVRsYG4fTB2NUj2DS5h%2be0%2bGRPyndfOkz4%2bcK%2bkoVE%3d&risl=&pid=ImgRaw&r=0',
 'https://wallpaperaccess.com/full/124071.jpg',
 'https://wallpaper.dog/large/10809214.jpg',
 'https://tse3.mm.bing.net/th/id/OIP.M7zgOCIO42_ARjrhmrDD7AHaEF?pid=ImgDet&w=1272&h=703&rs=1',
  ];
  
  
  currentImageIndexLeft =1;
  currentImageIndexRight = 3;
  currentImageUrlLeft = this.images[this.currentImageIndexLeft];
  currentImageUrlRight = this.images[this.currentImageIndexRight];

  ngOnInit(): void {
    setInterval(() => this.changeImage(), 2955);
  }

  changeImage(): void {
    this.currentImageIndexLeft = (this.currentImageIndexLeft + 1) % this.images.length;
    this.currentImageUrlLeft = this.images[this.currentImageIndexLeft];
 
    this.currentImageIndexRight = (this.currentImageIndexRight + 1) % this.images.length;
    this.currentImageUrlRight = this.images[this.currentImageIndexRight];
  }
  likes: number[] = Array(this.images.length).fill(0);

  comments: string[][] = Array(this.images.length).fill([]); 

  addComment(index: number): void {
    const commentText = '';
    this.comments[index].push(commentText);
  }


  isLiked: boolean[] = Array(this.images.length).fill(false);



  likeImage(index: number): void {
    this.likes[index]++;
    this.isLiked[index] = true;
  }
}
  

