<?php

namespace App\Http\Controllers;
use App\Ad;
use App\City;
use App\Division;
use App\Category;
use App\Area;
use App\Image;

use Hash;

use Illuminate\Http\Request;

class AdController extends Controller
{
   
    public function create_a_new_ad(Request $request){
        
        $data = $request->all();
        $images = $data['image_links'];
        unset($data['image_links']);
        $ad =  Ad::create($data);
        $links = [];
        
        $ob = [];
        $ob['ad_id'] = $ad->id;
        $ob['image_link1'] =  $images[0];
        $ob['image_link2'] =  $images[1];
        $ob['image_link3'] =  $images[2];
        $ob['image_link4'] =  $images[3];
        $ob['image_link5'] =  $images[4];
        
        
        array_push($links,$ob);
    
        Image::insert($links);
        
        return $ad;
    
    }

    
    public function all_ad_by_id($id){
    
    return Ad::where('id',$id)->with('user','area','division','city','image')->first();
    }
    
    public function delete_an_ad(Request $request){
        $data = $request->all();
        return Ad::where('id',$data['id'])->delete();
    }
    public function update_ad_type(Request $request){
        $data = $request->all();

        return Ad::where('id',$data['id'])->update($data);
    }
    
    public function all_ads_of_same_category ($id) {
        return Ad::where('category_id',$id)->with('area','division','city')->paginate(10);
    }
    public function all_ads_of_same_division ($id) {
        return Ad::where('division_id',$id)->with('area','division','city')->paginate(10);
    }
  
    public function all_ads_of_same_city ($id) {
        return Ad::where('city_id',$id)->with('area','division','city')->paginate(10);
    }
    public function all_ads_of_my_id ($id) {
        return Ad::where('user_id',$id)->with('area','division','city')->paginate(10);
    }
    public function all_ads() {
        return Ad::with('area','division','city')->paginate(10);
        
    }



    public function create_a_new_division(Request $request){
        $data = $request->all();
        return Division::create($data);
     
    }
    public function create_a_new_city(Request $request){
        $data = $request->all();
        return City::create($data);
     
    }
    public function create_a_new_category(Request $request){
        $data = $request->all();
        return Category::create($data);
     
    }

    public function create_a_new_area(Request $request){
        $data = $request->all();
         return Area::firstOrCreate(['name' => $data['name']]);
        
    }
    public function all_city(){
    return City::all();
    }
    public function all_division(){
    return Division::all();
    }
    public function all_area(){
    return Area::all();
    }
    public function all_category(){
    return Category::with('amount')->get();
        }
//file upload function
    public function image_upload(Request $request)
    {
        \Log::info($request);
        request()->file('img')->store('/uploads');
        $pic = "/uploads/" . $request->img->hashName();
        return $pic;
    }

    
}
