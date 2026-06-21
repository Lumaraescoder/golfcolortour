// Centralized guide images exports (used when building explicit tour galleries)
import alemaesgenteboa from "@/images/guides/alemaesgenteboa.jpeg";
import alfama1 from "@/images/guides/alfama1.jpeg";
import alfamase from "@/images/guides/alfamase.jpeg";
import belem2 from "@/images/guides/belem2.jpeg";
import belem3 from "@/images/guides/belem3.jpeg";
import belemefullday from "@/images/guides/belemefullday.jpeg";
import belemtour from "@/images/guides/belemtour.jpeg";
import fotosnotuk from "@/images/guides/fotosnotuk.jpeg";
import gatasuk from "@/images/guides/gatasuk.jpeg";
import gracaalfama from "@/images/guides/graçaalfama.jpeg";
import igrejaalfama from "@/images/guides/igrejaalfama.jpeg";
import linda2 from "@/images/guides/linda2.jpeg";
import lindafoto from "@/images/guides/lindafoto.jpeg";
import lucasebrasileiros from "@/images/guides/lucasebrasileiros.jpeg";
import lucaseospessoalchiado from "@/images/guides/lucaseospessoalchiado.jpeg";
import lucaspanteaoalfama from "@/images/guides/lucaspanteaoalfama.jpeg";
import meninas from "@/images/guides/meninas.jpeg";
import miardouronosassenhoera from "@/images/guides/miardouronosassenhoera.jpeg";
import miradouro from "@/images/guides/miradouro.jpeg";
import miradouroalfama from "@/images/guides/miradouroalfama.jpeg";
import miradouronossasenhora from "@/images/guides/miradouronossasenhora.jpeg";
import miradouronossasenhotra from "@/images/guides/miradouronossasenhotra.jpeg";
import panteao_alfama from "@/images/guides/panteao alfama.jpeg";
import panteaonacional from "@/images/guides/panteaonacional.jpeg";
import pessoas_notuk from "@/images/guides/pessoas notuk.jpeg";
import pessoas from "@/images/guides/pessoas.jpeg";
import pracadocomercio from "@/images/guides/praçadocomercio.jpeg";
import torrebelem from "@/images/guides/torrebelem.jpeg";
// new subfolders
import christmas1 from "@/images/guides/christimas/imgi_17_image.jpeg";
import christmas2 from "@/images/guides/christimas/imgi_28_image.jpeg";
import christmas3 from "@/images/guides/christimas/imgi_53_luzes-de-natal-no-chiado-@playstationpt-_4-1024x683.jpg";
import fatimaA from "@/images/guides/fatima/fatima.jpg";
import fatimaB from "@/images/guides/fatima/imgi2image.jpeg";
import fatimaC from "@/images/guides/fatima/imgi54fatima.jpg";
import sintra1 from "@/images/guides/sintra/imgi_39_image.jpeg";
import sintra2 from "@/images/guides/sintra/imgi_44_image.jpeg";
import sintra3 from "@/images/guides/sintra/imgi_53_poço.jpg";

export {
 alemaesgenteboa,
 alfama1,
 alfamase,
 belem2,
 belem3,
 belemefullday,
 belemtour,
 fotosnotuk,
 gatasuk,
 gracaalfama,
 igrejaalfama,
 linda2,
 lindafoto,
 lucasebrasileiros,
 lucaseospessoalchiado,
 lucaspanteaoalfama,
 meninas,
 miardouronosassenhoera,
 miradouro,
 miradouroalfama,
 miradouronossasenhora,
 miradouronossasenhotra,
 panteao_alfama,
 panteaonacional,
 pessoas_notuk,
 pessoas,
 pracadocomercio,
 torrebelem,
};

// Map original filenames (as used in JSON) to imported StaticImageData
export const TOUR_IMAGES_MAP: Record<string, any> = {
 "alemaesgenteboa.jpeg": alemaesgenteboa,
 "alfama1.jpeg": alfama1,
 "alfamase.jpeg": alfamase,
 "belem2.jpeg": belem2,
 "belem3.jpeg": belem3,
 "belemefullday.jpeg": belemefullday,
 "belemtour.jpeg": belemtour,
 "fotosnotuk.jpeg": fotosnotuk,
 "gatasuk.jpeg": gatasuk,
 "graçaalfama.jpeg": gracaalfama,
 "igrejaalfama.jpeg": igrejaalfama,
 "linda2.jpeg": linda2,
 "lindafoto.jpeg": lindafoto,
 "lucasebrasileiros.jpeg": lucasebrasileiros,
 "lucaseospessoalchiado.jpeg": lucaseospessoalchiado,
 "lucaspanteaoalfama.jpeg": lucaspanteaoalfama,
 "meninas.jpeg": meninas,
 "miardouronosassenhoera.jpeg": miardouronosassenhoera,
 "miradouro.jpeg": miradouro,
 "miradouroalfama.jpeg": miradouroalfama,
 "miradouronossasenhora.jpeg": miradouronossasenhora,
 "miradouronossasenhotra.jpeg": miradouronossasenhotra,
 "panteao alfama.jpeg": panteao_alfama,
 "panteaonacional.jpeg": panteaonacional,
 "pessoas notuk.jpeg": pessoas_notuk,
 "pessoas.jpeg": pessoas,
 "praçadocomercio.jpeg": pracadocomercio,
 "torrebelem.jpeg": torrebelem,
 // christimas (filename and folder-prefixed keys)
 "christimas/imgi_17_image.jpeg": christmas1,
 "christimas/imgi_28_image.jpeg": christmas2,
 "christimas/imgi_53_luzes-de-natal-no-chiado-@playstationpt-_4-1024x683.jpg": christmas3,
 // fatima (map legacy JSON filenames to available files)
 "fatima/imgi_17_image.jpeg": fatimaA,
 // map legacy JSON filenames to the actual files
 "imgi_2_image.jpeg": fatimaB,
 "fatima/imgi_2_image.jpeg": fatimaB,
 "imgi2image.jpeg": fatimaB,
 "fatima/imgi2image.jpeg": fatimaB,
 "imgi_53_imgi_1_f3c64a471bd1d718d28ca0bb0ce8f5aa-Lisbon Christmas Streets.jpg": fatimaB,
 "fatima/imgi_53_imgi_1_f3c64a471bd1d718d28ca0bb0ce8f5aa-Lisbon Christmas Streets.jpg": fatimaB,
 "imgi_54_luzes-de-natal-no-chiado-@playstationpt-_4-1024x683.jpg": fatimaC,
 "fatima/imgi_54_luzes-de-natal-no-chiado-@playstationpt-_4-1024x683.jpg": fatimaC,
 // also accept legacy/malformed filenames that include a trailing bracket
 "imgi_54_fatima].jpg": fatimaC,
 "fatima/imgi_54_fatima].jpg": fatimaC,
 "imgi54fatima.jpg": fatimaC,
 "fatima/imgi54fatima.jpg": fatimaC,
	// fallback for nazare reference in JSON
	"nazare.jpeg": fatimaC,
	"fatima/nazare.jpeg": fatimaC,
 // sintra
 "imgi_39_image.jpeg": sintra1,
 "sintra/imgi_39_image.jpeg": sintra1,
 "imgi_44_image.jpeg": sintra2,
 "sintra/imgi_44_image.jpeg": sintra2,
 "imgi_53_poço.jpg": sintra3,
 "sintra/imgi_53_poço.jpg": sintra3,
};
