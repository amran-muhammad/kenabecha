<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'ad_id','image_link1','image_link2','image_link3','image_link4','image_link5'
    ];
}
