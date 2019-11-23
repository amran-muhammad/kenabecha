<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    protected $fillable = [
        'name','price','description','phone','category_id','city_id','division_id','user_id','area_id','ad_type'
    ];
    public function category(){
        return $this->belongsTo('App\Category');
    }
    public function division(){
        return $this->belongsTo('App\Division');
    }
    
    public function city(){
        return $this->belongsTo('App\City');
    }
    public function area(){
        return $this->belongsTo('App\Area');
    }
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function image(){
        return $this->hasOne('App\Image');
    }
    
    
   
}
