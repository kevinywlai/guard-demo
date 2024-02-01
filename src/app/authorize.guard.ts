import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthorizeService} from "./authorize.service";
import {Authorize} from "./authorize";

export const authorizeGuard: CanActivateFn =
  (route, state) => {
  const router = inject(Router);

  let page:string = state.url.replace('/','');

  const authorizeService$ = inject(AuthorizeService);

  let found = false;
    authorizeService$.getList().subscribe((data:Authorize[] )=> {
    console.log('page:',page)
    let auth = data.filter((item:Authorize) => item.page === page);
    console.log('auth:',auth.length)

    if(auth.length > 0 && auth[0].isAuthorized){
      console.log('auth[0].isAuthorized:',auth[0].isAuthorized)
      router.navigate([state.url]);
    }else {
      router.navigate(['/']);
    }

  });

  return true;
};


/**
 *     @CrossOrigin
 *     @PostMapping("/authorize")
 *     public List<Map<String,Object>> guardDemo(HttpServletResponse response) {
 *         log.info("login");
 *
 *         List<Map<String,Object>> result = new ArrayList<>();
 *
 *         Map<String,Object> page1 = new HashMap<>();
 *         page1.put("page","page1");
 *         page1.put("isAuthorized",true);
 *
 *         Map<String,Object> page2 = new HashMap<>();
 *         page2.put("page","page2");
 *         page2.put("isAuthorized",false);
 *
 *         result.add(page1);
 *         result.add(page2);
 *
 *         return result;
 *     }
 */
