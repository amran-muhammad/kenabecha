<?php

namespace App;
use DB;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name'
    ];
    public function amount(){
        return $this->hasMany('App\Ad')->select('category_id',DB::raw('count(category_id) as amountofads'))->groupBy('category_id');
    }
}
