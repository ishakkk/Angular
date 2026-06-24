import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  imports: [FormsModule],
  templateUrl: './calculate.html',
  styleUrl: './calculate.css',
})
export class Calculate 
{
  istenilenTutar:number=0;
  aylikFaizOrani:number=0;
  vade:number=0;
  uygulananNetFaiz:number=0;
  aylikTaksitTutari:number=0;
  toplamGeriOdemeTutari:number=0;

  Hesapla()
  {
    if(this.vade===0 || this.istenilenTutar===0)
      {
        this.aylikTaksitTutari=0;
        this.toplamGeriOdemeTutari=this.istenilenTutar;
        this.uygulananNetFaiz=this.aylikFaizOrani;
        return;
      }

      const netFaiz=this.aylikFaizOrani/100;
      const brutFaiz=netFaiz*1.30;
      const usluSayi=Math.pow(1+brutFaiz,this.vade);

      const taksit=this.istenilenTutar*(brutFaiz*usluSayi)/(usluSayi-1);

      this.uygulananNetFaiz=this.aylikFaizOrani;
      this.aylikTaksitTutari=Math.round(taksit*100)/100;
      this.toplamGeriOdemeTutari = Math.round((this.aylikTaksitTutari * this.vade) * 100) / 100;
  }
}
