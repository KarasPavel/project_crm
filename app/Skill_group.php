<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 24.09.2018
 * Time: 15:26
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Skill_group extends Model
{
    protected $fillable = [
        'person_id',
        'skill_id',
    ];

    public function getQueueableRelations()
    {
        // TODO: Change the autogenerated stub
    }

    public function person()
    {
        return $this->belongsToMany('App\Person');
    }

    public function skills()
    {
        return $this->belongsTo('App\Skill');
    }

}
